//REACT
import React from 'react'
//MATERIAL UI
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { linearProgressClasses } from '@mui/material/LinearProgress';
//REACT SPRING FRAMEWORK
import { useSpring, animated } from '@react-spring/web'
//CSS
import styles from '../Css/resumeMobile.module.css'
import mainStyles from '../Css/generalCss.module.css'
//MATERIAL UI STYLES
import { styled } from '@mui/material/styles';

function ResumeMobile() {

    const [progressReact, setProgressReact] = React.useState(0);
    const [progressJavascript, setProgressJavascript] = React.useState(0);
    const [progressJava, setProgressJava] = React.useState(0);
    const [progressSql, setProgressSql] = React.useState(0);
    const [progressSpring, setProgressSpring] = React.useState(0);
    const [progressC, setProgressC] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setProgressReact((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressJavascript((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);


    React.useEffect(() => {
        setInterval(() => {
            setProgressJava((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressSql((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 70);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressSpring((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressC((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 70);
            });
        }, 20);
    }, []);

    const springs1 = useSpring({
        from: { y: 0 },
        to: { y: 160 },
    })

    const springs2 = useSpring({
        from: { y: 0 },
        to: { y: 880 },

    })


    const BorderLinearProgressReact = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const BorderLinearProgressJavascript = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#f5dd1b' : '#308fe8',
        },
    }));

    const BorderLinearProgressJava = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#f17020' : '#308fe8',
        },
    }));

    const BorderLinearProgressSql = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#7598c7' : '#308fe8',
        },
    }));

    const BorderLinearProgressSpring = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#6cb13d' : '#308fe8',
        },
    }));

    const BorderLinearProgressC = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#05467e' : '#308fe8',
        },
    }));

    return (
        <div>
            <CardContent className={[mainStyles.card, styles.elementToFadeInAndOut]} style={{ marginTop: -10 }}>
                <Grid container>
                    <animated.div
                        style={{
                            width: 10,
                            marginLeft: -15,
                            height: 100,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs1

                        }}
                    />
                    <animated.div
                        style={{
                            width: 10,
                            marginLeft: -15,
                            height: 100,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs2

                        }}
                    />
                    <Grid container spacing={4} style={{ marginTop: -30 }}>
                        <Grid item xs={6} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 35 }}>Resume </span>
                        </Grid>
                        <Grid item xs={4}>
                            <hr />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end" spacing={3} >
                        <Grid item xs={12} style={{ marginTop: 10, marginLeft: 10 }}>
                            <Grid container justifyContent="left" spacing={2} >
                                <SchoolOutlinedIcon style={{ color: '#f95054' }} fontSize='large' />
                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', fontSize: 25, marginTop: 2, marginLeft: 10 }}>Education</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2014-2019</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 5, fontSize: 13 }}>Scuola superiore Geremia Piscopo</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Arzano(NA)</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2018-2019</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>It Essentials</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Cisco</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2018-2019</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>C++</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Cisco</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2017-2018</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>Assistente Bagnante</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>FINN</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2021-2021</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>Java Developer</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Itconsulting</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: 10, marginLeft: 10 }}>
                            <Grid container justifyContent="left" spacing={2} >
                                <WorkOutlineOutlinedIcon style={{ color: '#f95054' }} fontSize='large' />
                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', fontSize: 25, marginTop: 2, marginLeft: 10 }}>Experience</span>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2021-NOW</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>Software Engineer</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Accenture</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item xs={12} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 20 }}>2021-NOW</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 13 }}>Software Engineer</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 18 }}>Matrix Consulting Group Srl</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent className={[styles.contenutoCardPrincipale2, styles.elementToFadeInAndOut]}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Card style={{ backgroundColor: '#0d0d0d' }}>
                            <Grid item xs={12} style={{ marginTop: 10 }}>
                                <Grid container justifyContent="center" spacing={2} >
                                    <span style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>Skills</span>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    {/* SKILLS */}
                    <Grid container spacing={4} style={{ marginTop: 1 }}>
                        <Grid item xs={12} lg={6} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>REACT</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressReact style={{ height: 5 }} variant="determinate" value={progressReact} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>JAVASCRIPT</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressJavascript style={{ height: 5 }} variant="determinate" value={progressJavascript} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>JAVA</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressJava style={{ height: 5 }} variant="determinate" value={progressJava} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>SQL</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>70%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressSql style={{ height: 5 }} variant="determinate" value={progressSql} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>SPRING</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressSpring style={{ height: 5 }} variant="determinate" value={progressSpring} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} lg={9} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>C++/C</span>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>70%</span>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ width: '100%' }}>
                                        <BorderLinearProgressC style={{ height: 5 }} variant="determinate" value={progressC} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* FINE SKILLS */}
                        <Grid item xs={12} lg={6}>
                            <Card style={{ backgroundColor: '#0d0d0d' }}>
                                <Grid item xs={12} lg={6} style={{ marginTop: 10 }}>
                                    <Grid container justifyContent="center" spacing={2} >
                                        <span style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>Knowledges</span>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* KNOWLEDGES */}
                    <Grid item xs={12} style={{marginTop:20}}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Javascript</span>
                                </Card>
                            </Grid>
                            <Grid item xs={6} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Java</span>
                                </Card>
                            </Grid>
                            <Grid item xs={7} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>React.js</span>
                                </Card>
                            </Grid>
                            <Grid item xs={7} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Spring</span>
                                </Card>
                            </Grid>
                            <Grid item xs={10} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Microsoft Excel</span>
                                </Card>
                            </Grid>
                            <Grid item xs={6} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>HTML5</span>
                                </Card>
                            </Grid>
                            <Grid item xs={7} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>C++/C</span>
                                </Card>
                            </Grid>
                            <Grid item xs={11} lg={7} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Framework Spring</span>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* FINE KNOWLEDGES */}
                </Grid>



            </CardContent>
        </div>
    );
}

export default ResumeMobile;