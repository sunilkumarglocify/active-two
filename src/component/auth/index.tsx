import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Grid, Typography, Box,  useTheme, } from "@mui/material";
import { useAuth } from "../../context/auth/auth-context";
import { useNavigate } from "react-router-dom";
import { StandardTextField } from "../../global/form-field/text-field";
import palette from "../../theme/palette";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const theme = useTheme(); // Use useTheme hook to access the current theme
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); // Use the useAuth hook

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
    login(); // Call the login method from the authentication context
    navigate("/dashboard");
  };

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]); // Add 'navigate' to the dependency array

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, px: 2, boxSizing: 'border-box' }} >
      <Box sx={{ maxWidth: 580, p: 3, borderRadius: 2, boxShadow: '0px 0px 3px #c0c0c075', }}>
        <Typography variant="h4" sx={{ color: palette.light.text.primary, lineHeight: '1.3em', mb: 0.5, fontWeight: 600 }}>
          Welcome back
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: '1.3em', mb: 2.5, }}>
          Login to the Dashboard
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{
              '.MuiFormControl-root': {
                backgroundColor: 'transparent',
              }
            }}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <StandardTextField
                    field={field}
                    size="small"
                    variant="outlined"
                    label="Email"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{
              '.MuiFormControl-root': {
                backgroundColor: 'transparent',
              }
            }}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <StandardTextField
                    field={field}
                    size="small"
                    variant="outlined"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            sx={{
              mt: 2, borderRadius: 1,
              backgroundColor: theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default, ":hover": {
                backgroundColor: '#0c0c0c'
              }
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
