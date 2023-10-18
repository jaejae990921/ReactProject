import styled from 'styled-components';

const Stdiv = styled.div`
  font-size: 12px;
  color: #c5c5d1;
  position: absolute;
  bottom: 10px;

  @media screen and (max-width: 1050px) {
    font-size: 10px;
  }

  @media screen and (max-width: 890px) {
    font-size: 8px;
  }
`;

export default function Preview() {
  return (
    <>
      <Stdiv>
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts.{' '}
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          target="_blank"
          style={{ color: '#c5c5d1' }}
        >
          ChatGPT September 25 Version
        </a>
      </Stdiv>
    </>
  );
}
