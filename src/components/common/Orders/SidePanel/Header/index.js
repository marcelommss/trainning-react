import { Container } from './styles';
import { BiCodeAlt } from 'react-icons/bi';

function Header() {
  return (
    <Container>
      <BiCodeAlt />
      <h2>Coding Lessons</h2>
    </Container>
  );
}

export default Header;
