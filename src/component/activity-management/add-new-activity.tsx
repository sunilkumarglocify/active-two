import { Box, Grid, Stack, Typography } from '@mui/material'
import palette from '../../theme/palette'

const AddNewActivity = () => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box sx={{
                backgroundColor: palette.light.background.default,
                borderRadius: '10px',
                border: '1px solid #b2b2b2',
                boxSizing: 'border-box',
                overflow: 'hidden',
                height: '100%',
            }}>
                <Box sx={{
                    width: '100%',
                    backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/6c758aef-da4b-4b58-9d00-e9fba9353479.png)`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    aspectRatio: '1.5/1',
                    backgroundRepeat: 'no-repeat',
                }}>
                </Box>
                <Box sx={{ p: 2 }}>
                    <Typography variant='body1' sx={{
                        color: '#2a2a2a',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '27px',
                    }}>
                        Add New Activity
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default AddNewActivity