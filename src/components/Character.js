import styled from 'styled-components'
const Heading = styled.h2`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    text-decoration: underline;
`
const Paragraph = styled.p`
    color: black;
    background-color: transparent;
`

const Section = styled.section`
    background-color: white;
`

const Character = ({ character }) => {
    const { name, birth_year, eye_color, films, gender, hair_color, height, skin_color } = character;
    return (
      <Section>
        <Heading>Name: {name}</Heading>
        <Paragraph>Birth Year: {birth_year}</Paragraph>
        <Paragraph>Eye Color: {eye_color}</Paragraph>
        <Paragraph>Films: {films}</Paragraph>
        <Paragraph>Gender: {gender}</Paragraph>
        <Paragraph>Hair Color: {hair_color}</Paragraph>
        <Paragraph>Height {height}</Paragraph>
        <Paragraph>Skin Color: {skin_color}</Paragraph>
      </Section>
    );
  };
  
  export default Character