import { expect, test } from "vitest";
import { handleRequest } from "./index.js";

const fetchMock = getMiniflareFetchMock();
const example = fetchMock.get("https://example.com");

// Throw when no matching mocked request is found
// (see https://undici.nodejs.org/#/docs/api/MockAgent?id=mockagentdisablenetconnect)
fetchMock.disableNetConnect();

test("responds with url", async () => {
  example.intercept({ method: "GET", path: "/foo" }).reply(200, "bar");

  const req = new Request("http://localhost/");
  const res = await handleRequest(req);
  const json = await res.json();

  expect(json).toStrictEqual({ response: "Response: bar" });
});
