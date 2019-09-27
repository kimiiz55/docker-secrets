# Docker Secrets
This NPM module loads Docker secrets from directory created by Docker Swarm into a JS object for use within Node.js applications.

## Installation
```bash
npm install @venuee/docker-secrets
```

## Usage
```javascript
const getSecrets = require('@venuee/docker-secrets');

const secrets = getSecrets('/run/secrets')

console.log(secrets)

{
    secret_1: ...,
    secret_2: ...,
}

const secret_1 = secrets['secret_1'];

```