import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <>
      <h2 style={{ padding: 24 }}>
        <Link href="/">
          <a>
            wumusenlin
          </a>
        </Link>
      </h2>
    </>
  )
}