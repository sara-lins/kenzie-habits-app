import { CgLogOut } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <CgLogOut />
      </Link>
      <h2>Kenzie Habits</h2>
      <div>
        <p>User</p>
        <div>
          <FaUserAlt />
        </div>
      </div>
    </header>
  );
};

export default Header;
