// import middleware from "next-auth/middleware";
// export default middleware;

//short way
export { default } from "next-auth/middleware";

//the permission for secure url or route
//if you go to that url /users/:id* without permissions or not logging yet
//middleware will auto redirect to login page
export const config = {
  // *: zero or more
  // +: one or mroe
  // ?: zero or one
  matcher: ["/admin", "/users/:id*"],
};
