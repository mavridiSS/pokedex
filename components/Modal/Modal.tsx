import React from "react";
import { Button } from "../sharedstyles";
import Portal from "./Portal";
import {
  Actions,
  Backdrop,
  Container,
  Content,
  Input,
  Modal as ModalContainer,
} from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data) => void;
}

export default function Modal({ open, onClose, onSubmit }: Props) {
  if (!open) return null;

  return (
    <Portal>
      <Backdrop>
        <form onSubmit={onSubmit}>
          <ModalContainer className="modal">
            <Container>
              <Content>
                <Input placeholder="Name" required />
              </Content>
              <Actions>
                <Button variant="secondary" type="button" onClick={onClose}>
                  Close
                </Button>
                <Button type="submit">Save</Button>
              </Actions>
            </Container>
          </ModalContainer>
        </form>
      </Backdrop>
    </Portal>
  );
}
