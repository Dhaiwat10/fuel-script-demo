# fuel script demo

This is a demo project containing a Fuel script that includes two contract calls:

First, we call a counter contract to increment its counter by 1. We then take the new count and call another contract to set the count to the new value.

At the end, we return the new count from the second contract call. This is the value that will be returned by the script.

## Local Setup

Install dependencies:

```bash
bun install
```

Run the `fuels dev` server:

``bash
bun fuels dev
```

Run the frontend:

```bash
bun dev
```