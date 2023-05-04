import { createRef, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validations/contactValidationSchema";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const ContactForm = () => {
  const theme = useTheme();
  const recaptchaRef = useRef()
    
      const formik = useFormik({
        initialValues: {
          fullname: "",
          email: "",
          subject: "",
          message: "",
          recaptcha: "",
        },
        validationSchema: contactValidationSchema,
        onSubmit: (values) => {
          console.log("Form values: ", values);
        },
      });
  return (
    <form onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="نام و نام خانوادگی"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="آدرس ایمیل"
                  name="email"
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="عنوان"
                name="subject"
                variant="outlined"
                helperText={
                  formik.touched.fullname ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label="متن پیام"
                name="message"
                variant="outlined"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          alignItems: "end",
          flexDirection: "column",
        }}
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          ارسال کن
        </Button>
      </CardActions>
    </form>
  );
};
