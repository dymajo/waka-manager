import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Button,
  ModalFooter,
  Label,
  Input
} from 'reactstrap';
export default function CreateWorkerModal({ createWorker }) {
  const [modal, setmodal] = useState(false);
  const [prefix, setPrefix] = useState('');
  const [version, setVersion] = useState('');
  const [shapesContainer, setShapesContainer] = useState('');
  const [shapesRegion, setShapesRegion] = useState('');
  const [dbConfig, setDbConfig] = useState('');
  const [newRealtime, setNewRealtime] = useState(false);
  const onCreateWorker = () => {
    createWorker(
      prefix,
      version,
      shapesContainer,
      shapesRegion,
      dbConfig,
      newRealtime
    );
  };
  const disabled =
    !prefix || !version || !shapesContainer || !shapesRegion || !dbConfig;
  const CloseButton = (
    <button
      className="close btn btn-round"
      type="button"
      onClick={() => setmodal(false)}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
  return (
    <>
      <Button outline color="primary" onClick={() => setmodal(true)}>
        Create Worker
      </Button>
      <Modal isOpen={modal} toggle={() => setmodal(false)} backdrop="static">
        <ModalHeader close={CloseButton}>Create Worker</ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label htmlFor="workerPrefix">Prefix</Label>
            <Input
              onChange={e => setPrefix(e.target.value)}
              type="text"
              id="workerPrefix"
              placeholder="us-nyc"
              value={prefix}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="workerVersion">Version</Label>
            <Input
              onChange={e => setVersion(e.target.value)}
              type="text"
              id="workerVersion"
              placeholder="20180706-12345"
              value={version}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="workerVersion">Shapes Container</Label>
            <Input
              onChange={e => setShapesContainer(e.target.value)}
              type="text"
              id="workerShapesContainer"
              placeholder="shapes-us-west-2.waka.app"
              value={shapesContainer}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="workerVersion">Shapes Region</Label>
            <Input
              onChange={e => setShapesRegion(e.target.value)}
              type="text"
              id="workerShapesRegion"
              placeholder="us-west-2"
              value={shapesRegion}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="workerDbconfig">
              DB Config <code>config.db[yourConfig]</code>
            </Label>
            <Input
              onChange={e => setDbConfig(e.target.value)}
              type="text"
              id="workerDbconfig"
              placeholder="local"
              value={dbConfig}
            />
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={e => setNewRealtime(e.target.checked)}
              type="checkbox"
              className="form-check-Input"
              id="workerNewRealtime"
              checked={newRealtime}
            />
            <Label className="form-check-Label" htmlFor="workerNewRealtime">
              New Realtime (experimental)
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setmodal(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={onCreateWorker} disabled={disabled}>
            Create Worker
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
