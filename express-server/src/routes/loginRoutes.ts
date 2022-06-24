import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send(`
    <div>
      <div> Forbidden, you must login first :( </div>
      <div> <a href="/login">Go to login page</a> </div>
    </div>   
  `);
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === "mostafa@gmail.com" &&
    password === "123"
  ) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Sorry invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <div> You are logged in </div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div> You are not logged in </div>
        <a href="/login">Login</a>
      </div>
    `);
  }
  res.send("Hi There Welcome To My Application :)");
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Hi Awesome, welcome to protected page...");
});

export { router };
