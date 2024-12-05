import { Box, Grid, Stack, Typography } from '@mui/material'
import palette from '../../theme/palette';

interface ActivityCardProps {
    image: string,
    title: string,
    published: string,
    goLive: string
}

const ActivityManagementCard = ({ image, title, published, goLive }: ActivityCardProps) => {
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
                    backgroundImage: `url(${image})`,
                    width: '100%',
                    aspectRatio: '1.5/1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
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
                        {title}
                    </Typography>
                    <Stack sx={{ justifyContent: 'space-between' }} direction={'row'} gap={1} mt={0.5}>
                        <Stack sx={{ alignItems: 'center', gap: 0.5, }} >
                            <Typography variant='h6' sx={{
                                color: '#b4b4b4',
                                fontSize: '16px',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Published
                            </Typography>
                            <Typography variant='body1' sx={{
                                color: '#010000',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: '23px',
                            }}>
                                {published}
                            </Typography>
                        </Stack>
                        <Stack sx={{ alignItems: 'center', gap: 0.5, }}>
                            <Typography variant='h6' sx={{
                                color: '#b4b4b4',
                                fontSize: '16px',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Ready To Go Live
                            </Typography>
                            <Typography variant='body1' sx={{
                                color: '#010000',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: '23px',
                            }}>
                                {goLive}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Grid>
    )
}

export default ActivityManagementCard;
