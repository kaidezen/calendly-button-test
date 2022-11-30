import Image from "next/image";
import { Link } from './link';
import logo from '../assets/logo.svg';

export default function Logo({ ...rest }) {
  return (
    <Link
      isNotScrollable={true}
      path="/"
      sx={{
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image
        src={logo}
        alt="Kaidezen logo"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </Link>
  );
}
