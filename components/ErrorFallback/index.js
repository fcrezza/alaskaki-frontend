import {ErrorContainer, ErrorMessage} from "./utils";
import {Button} from "components/Button";

function ErrorFallback() {
  return (
    <ErrorContainer>
      <ErrorMessage>Whoops, ada yang tidak beres</ErrorMessage>
      <Button onClick={() => location.reload()}>Coba lagi</Button>
    </ErrorContainer>
  );
}

export default ErrorFallback;
