import { useField } from "formik";
import { Input, FormLabel, Alert, Grid } from "@mui/material";

export const TextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     
     <Grid container direction="column" marginBottom="15px">
       <FormLabel sx={{ fontWeight: "bold" }} htmlFor={props.id || props.name}>{label}</FormLabel>
       <Input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <Alert severity="warning">{meta.error}</Alert>
       ) : null}
     </Grid>
   );
 };