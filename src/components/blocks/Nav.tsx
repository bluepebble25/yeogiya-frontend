import React from 'react';
import { css } from '@emotion/react';
import {
  Container,
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../atoms/Logo';

const pages = ['추천 장소', '커뮤니티'];
const settings = ['My', '설정', '로그아웃'];

function Nav() {
  // Navbar 메뉴 아이콘 toggle 관리
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // Navbar 유저 아이콘 toggle 관리
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // NavBar 축약형 화면의 버거 아이콘 클릭 시 open / close
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Navbar 유저 프로필 클릭 시 open / close
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" css={navbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to="/"
            sx={{ display: { xs: 'none', md: 'flex' }, mt: '5px', mr: 2 }}
          >
            <Logo height="32px" />
          </Link>

          {/* 화면이 xs일 때에만 나타나는 축약형 영역 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            component={RouterLink}
            to="/"
            sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}
          >
            <Logo height="32px" />
          </Link>
          {/* 여기까지가 xs일 때의 반응형 영역 */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              mr: '16px',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              padding: '8px 6px 8px 6px',
              mr: 2,
            }}
          >
            <Typography>ㅇㅇㅇ 님</Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                  <PersonIcon sx={{ width: '32px', height: 'auto' }} />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;

const navbarStyle = css`
  &:after {
    content: '';
    display: block;
    height: 4px;
    background: linear-gradient(
      rgba(9, 30, 66, 0.13) 0px,
      rgba(9, 30, 66, 0.13) 1px,
      rgba(9, 30, 66, 0.08) 1px,
      rgba(9, 30, 66, 0) 4px
    );
  }
`;
