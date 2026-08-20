# dreamteamproductions.co.uk

Portfolio site for **Dream Team Productions** — live event and broadcast production for
combat sports and competitive gaming.

- `/` — overview: capabilities, twelve selected productions, clients, founders, contact
- `/work` — the full credit list, filterable by discipline, country and client

Next.js static export, hosted on S3 behind CloudFront. Monochrome by design: white on black,
no photography, Bebas Neue + DM Sans.

## Local development

```bash
npm install
npm run dev            # http://localhost:3000
npm run typecheck
```

```bash
npm run build          # static export into out/
npx serve out -l 4173  # check trailing-slash routing against flat files
```

## Editing content

Everything lives in two files.

**`src/lib/credits.ts`** — the portfolio. One entry per production, with the phases it
covered listed inline:

```ts
{
  event: 'Reignited: Usyk vs Fury 2',
  ...V.kingdomArena,
  client: 'DAZN',
  phases: [
    p(GA, '2024-12-17'),
    p(OW, '2024-12-18'),
    p(PC, '2024-12-19'),
    p(WI, '2024-12-20'),
    p(FN, '2024-12-21'),
  ],
},
```

A five-day fight week is one entry, not five. Venue shorthands (`V.kingdomArena`), phase
shorthands (`GA`, `OW`, `PC`, `WI`, `FN`) and client shorthands are defined at the top of
the file. Add new venues to the `V` map.

Statistics on the site — productions, venues, countries, clients — are computed from this
file, so adding a credit updates the copy everywhere. Never type a count by hand.

If a detail is uncertain, add `unresolved: 'why'` instead of guessing. The entry stays in the
file as a record but is left off the site. Four items are currently parked; see the block at
the top of `credits.ts`.

**`src/lib/data.ts`** — written copy: capabilities, founder bios, the twelve marquee
productions, contact address.

## Deploying

Push to `main`. GitHub Actions builds, syncs to S3 and invalidates CloudFront.

### First-time setup

The certificate is deployed separately because ACM DNS validation blocks stack creation
until the validation records exist — and they can't be read until the resource does.

```bash
# 1. Request the certificate (us-east-1 is mandatory for CloudFront)
aws cloudformation deploy \
  --template-file infra/certificate.yml \
  --stack-name dtp-certificate \
  --region us-east-1 \
  --profile <profile>

# 2. While that waits, read the validation records and add them at 20i
aws acm describe-certificate --region us-east-1 --profile <profile> \
  --certificate-arn $(aws cloudformation describe-stacks \
    --stack-name dtp-certificate --region us-east-1 --profile <profile> \
    --query 'Stacks[0].Outputs[?OutputKey==`CertificateArn`].OutputValue' --output text) \
  --query 'Certificate.DomainValidationOptions[].ResourceRecord'

# 3. Once issued, deploy the site infrastructure
aws cloudformation deploy \
  --template-file infra/site.yml \
  --stack-name dtp-site \
  --region us-east-1 \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides CertificateArn=<arn> \
  --profile <profile>

# 4. Wire the stack outputs into the repo
aws cloudformation describe-stacks --stack-name dtp-site --region us-east-1 \
  --profile <profile> --query 'Stacks[0].Outputs'

gh variable set AWS_DEPLOY_ROLE_ARN --body <DeployRoleArn>
gh variable set AWS_S3_BUCKET --body <BucketName>
gh variable set AWS_CLOUDFRONT_DISTRIBUTION_ID --body <DistributionId>
```

Pass `CreateOidcProvider=false` if the account already has the GitHub Actions OIDC provider —
AWS allows only one per issuer URL.

### DNS cutover — last, and only after verifying

The apex currently serves a WordPress holding page, and DNS is at 20i
(`ns1-4.stackdns.com`), not Route 53.

1. Deploy and push. Verify the site fully on the distribution domain
   (`https://<id>.cloudfront.net`) **while WordPress is still live**.
2. Point the apex at the distribution domain. A zone apex can't be a CNAME, so this needs
   20i's ANAME/ALIAS record type. If they don't offer one, delegate the zone to Route 53 and
   use an A-ALIAS — recreate the existing records there first.
3. `www` becomes a plain CNAME to the distribution domain.
4. **Leave the `elliot.` records untouched** — that subdomain is on GitHub Pages and must
   keep resolving.
5. Retire the WordPress page once the apex resolves and serves correctly.

### Verifying a deploy

```bash
D=https://<distribution>.cloudfront.net
curl -sI $D/          | head -1   # 200
curl -sI $D/work/     | head -1   # 200  (proves the index rewrite)
curl -sI $D/work      | head -1   # 301 -> /work/
curl -sI $D/nope/     | head -1   # 404
curl -sI $D/_next/static/chunks/<file>.js | grep -i cache-control   # immutable, 1 year
curl -sI $D/          | grep -i cache-control                       # must-revalidate
```

The bucket is private — a direct S3 URL should return 403.

## Related

- `elliot.dreamteamproductions.co.uk` — talent portfolio (`../portfolio-elliot`, GitHub Pages)
- See `CLAUDE.md` for conventions and the reasoning behind the less obvious choices
