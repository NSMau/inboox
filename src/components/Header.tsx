import Logotype from "./Logotype"

export default function Header() {
  return (
    <header>
      <Logotype />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
