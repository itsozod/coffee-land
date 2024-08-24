import { Alert, Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const AppUpdateModal = () => {
  const [snackBar, setSnackBar] = useState(false);

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  useEffect(() => {
    if (offlineReady) {
      setSnackBar(true);
      console.log("Offline now!", offlineReady);
    }
  }, [offlineReady]);

  console.log("ready", offlineReady);

  return (
    <>
      <Modal
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={needRefresh}
        onClose={close}
      >
        <div
          style={{
            background: "grey",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            borderRadius: "12px",
          }}
        >
          <Typography variant="h4">A new app update is available.</Typography>
          <Typography variant="h6">
            <strong>Reload</strong> will refresh the app. You may lose the
            progress, if any.
          </Typography>
          <Typography variant="h6">
            <strong>Cancel</strong> will install the update next time you visit
            the app.
          </Typography>

          <Box>
            <Button color="error" onClick={close}>
              Cancel
            </Button>
            <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
          </Box>
        </div>
      </Modal>

      <Snackbar
        open={snackBar}
        onClose={() => setSnackBar(false)}
      >
        <Alert
          onClose={() => setSnackBar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          App is ready to work offline
        </Alert>
      </Snackbar>
    </>
  );
};

export default AppUpdateModal;
