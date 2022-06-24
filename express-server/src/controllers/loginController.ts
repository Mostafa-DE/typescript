import { Request, Response } from "express";
import { controller, get } from "./decorators/index";

@controller("/auth")
class loginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" placeholder="Enter your Email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" placeholder="Enter your Password" />
        </div>
        <button type="submit">Submit</button>
    </form>
  `);
  }
}
