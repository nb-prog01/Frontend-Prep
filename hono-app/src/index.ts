import { Hono } from 'hono'
import { bufferToFormData } from 'hono/utils/buffer'

const app = new Hono()

app.post('/', async (c) => {
  const body= await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
