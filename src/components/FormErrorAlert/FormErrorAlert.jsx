import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const FormErrorAlert = ({ fieldName, isFieldTouched }) => {
    const [open, setOpen] = useState(true);
    return (
        <>
            {fieldName && isFieldTouched &&
                <Box sx={{ width: '100%' }}>
                    <Collapse in={open}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            }
                            variant="filled"
                            severity="warning"
                        >
                            {fieldName}
                        </Alert>
                    </Collapse>
                </Box>
            }
        </>
    );
}

export default FormErrorAlert;