import { levelRows } from "../src/components/levels.data";

// export json by running the following command from project root
// ts-node -O '{"module": "commonjs"}' ./tools/db.ts > db.json

console.log(JSON.stringify({ levels: levelRows }));
