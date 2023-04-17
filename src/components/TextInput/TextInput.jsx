import { useField } from "formik";
import { Input, FormLabel, Grid } from "@mui/material";
import ErrorAlert from "components/FormErrorAlert/FormErrorAlert";

export const TextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     
     <Grid container direction="column" marginBottom="15px">
       <FormLabel sx={{ fontWeight: "bold" }} htmlFor={props.id || props.name}>{label}</FormLabel>
       <Input sx={{ mb: 2 }} className="text-input" {...field} {...props} />
       <ErrorAlert
              fieldName={meta.error}
              isFieldTouched={meta.touched}
          />
     </Grid>
   );
 };