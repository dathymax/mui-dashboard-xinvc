import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { AppBar, Avatar, Button, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Menu, Tooltip, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react'

const useStyles = makeStyles({
    appBar: {
        backgroundColor: 'var(--primary-color) !important',
        boxShadow: 'none !important',
        justifyContent: 'space-between',
        height: 50,
    },
    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    colorItem: {
        width: '20px',
        height: '20px',
        display: 'inline-block !important',
        lineHeight: '44px',
    },
    collapse: {
        marginTop: 20,
    },
    icon: {
        fontSize: '10px',
    }
})

const LeftBar = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '128px',
    display: 'inline-block'
}));

const RightBar = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'inline-block'
}));

const colors = ['#f44336', '#e91e63', '#9c27b0', '#ff8a80','#673ab7','#3f51b5','#2196f3','#009688','#00bcd4']

const Header = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [show, setShow] = useState(false);

    const handleClickShowMenuTheme = () => {
        setShow(!show);
    };

    const handleChangeTheme = (e) => {
        const color = e.target.dataset.theme;
        document.documentElement.style.setProperty('--primary-color',color);
        localStorage.setItem('primary-color',JSON.stringify(color));
    }

    return (
        <AppBar
            sx={{
                px: '20px',
                flexDirection: 'row',
            }}
            className={classes.appBar}
        >
            <LeftBar>
                <img src="./logo/logo.png" alt="" className={classes.img}/>
            </LeftBar>
            <RightBar>
                <div className="header__hello">Xin chào</div>
                <Box className="header__name">
                    
                    <Tooltip title="Account settings">
                        <Typography
                            component="div"
                            sx={{
                                cursor: 'pointer'
                            }}
                            onClick={handleClick}
                        >
                            Đỗ Tuấn Đạt
                        </Typography>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Box
                        style={{marginBottom: 20, width: 332}}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Avatar 
                                style={{
                                    width: 50,
                                    height: 50,
                                    margin: '0 0 15px 0'
                                }}
                            >
                                D
                            </Avatar>
                        </Box>
                        <Typography
                            sx={{
                                display: 'block',
                                textAlign: 'center',
                            }}
                        >
                            Đỗ Tuấn Đạt
                        </Typography>
                        <Typography
                            sx={{
                                display: 'block',
                                textAlign: 'center',
                            }}
                        >
                            datdt@dogoo.vn
                        </Typography>
                    </Box>
                    <Divider 
                        sx={{
                            my: '10px'
                        }}
                    />
                    
                    <List
                        sx={{ width: '100%', bgcolor: 'background.paper', color: '#000' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton
                            onClick={handleClickShowMenuTheme}
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                }
                            }}
                        >
                            {show ? <ArrowForwardIos style={{fontSize: '15px'}} /> : <ArrowBackIos style={{fontSize: '15px'}} /> }
                            <ListItemIcon>
                                <button 
                                    style={{backgroundColor: 'var(--primary-color)'}} 
                                    className="color"
                                >
                                </button>
                            </ListItemIcon>
                            <ListItemText primary="Change theme" />
                        </ListItemButton>
                        <Collapse 
                            className={classes.collapse} 
                            in={show} 
                            timeout="auto" 
                            unmountOnExit
                            sx={{
                                background: '#fff',
                                p: '20px',
                                position: 'absolute',
                                left: '-75%',
                                top: '-20px',
                                width: '200px',
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                        >
                            <List component="div" disablePadding>
                                {colors.map((color, index) => (
                                    <button 
                                        key={index}  
                                        onClick={handleChangeTheme} 
                                        data-theme={color}
                                        className="color" 
                                        style={{backgroundColor: color}}
                                    >
                                    </button>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                    <Divider 
                        sx={{
                            my: '10px' 
                        }}
                    />
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}                    
                    >
                        <Button 
                            variant="outlined"
                            style={{
                                borderColor: '#e0e0e0',
                                color: '#000',
                                textTransform: 'unset',
                                fontWeight: '400'
                            }}
                        >
                            Đăng xuất
                        </Button>
                    </Box>
                    <Divider
                        sx={{
                            my: '10px'
                        }}
                    />
                </Menu>
            </RightBar>
        </AppBar>
    )
}

export default Header
