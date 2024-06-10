import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <nav>
        <a href="/">Home</a>
        <a href="/auth/signin">Sign In</a>
        <a href="/auth/signup">Sign Up</a>
        <a href="/user">User Page</a>
        <a href="/admin">Admin Page</a>
        <a href="/checkout">Checkout</a>
      </nav>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
