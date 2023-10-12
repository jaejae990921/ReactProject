import styled from 'styled-components';

const StGpt = styled.div`
  height: 43px;
  width: 145px;
  background-color: ${(props) =>
    props.version ? 'rgb(64, 65, 79)' : 'transparent'};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    svg#starts {
      fill: rgb(171, 105, 255);
    }

    span {
      color: white;
    }
  }
`;

const Stdiv = styled.div`
  display: flex;
  width: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.version ? 'space-evenly' : 'space-between'};
`;

const Stspan = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.version ? 'white' : 'rgb(143, 142, 160)')};
  transition: all 0.3s;
`;

export default function GptTab({ version }) {
  const vCheck = version == 3.5 ? true : false;

  return (
    <StGpt version={vCheck}>
      <Stdiv version={vCheck}>
        {version == 3.5 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(26, 195, 124)"
            class="bi bi-lightning-charge-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
          </svg>
        ) : (
          <svg
            id="starts"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(143, 142, 160)"
            class="bi bi-stars"
            viewBox="0 0 16 16"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
          </svg>
        )}
        <Stspan version={vCheck}>GPT-{version}</Stspan>
        {version == 4 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgb(143, 142, 160)"
            class="bi bi-lock-fill"
            viewBox="0 0 16 16"
            style={{ transition: 'all 0.3s' }}
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
        ) : null}
      </Stdiv>
    </StGpt>
  );
}
