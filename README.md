# bun_report


```bash
bun install
```

The following works fine:

```bash
bun run run # bun index.ts
```

This works too: 

```bash
bun run:compiled # bun build --compile --sourcemap index.ts --outfile=server && ./server
```

This throws an error:

```bash
bun run:compiled-with-minify # bun build --compile --minify --sourcemap index.ts --outfile=server && ./server
```
The `Controller` import has the `config` argument's value.

<img width="791" height="198" alt="image" src="https://github.com/user-attachments/assets/f895e368-c864-43c7-8d16-2379097e2ec4" />


<img width="2083" height="413" alt="image" src="https://github.com/user-attachments/assets/211b98e6-bd88-427f-88d5-f64820a72cb5" />
