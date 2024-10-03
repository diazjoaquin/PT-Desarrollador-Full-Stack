import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import { IProject } from '../../interfaces/IProject';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const drawerWidth = 320;

interface Props {
  projects: IProject[];
  openCreateProjectModal: () => void;
  openDeleteProjectModal: (id: number) => void;
  setProjectId: (id: number | null) => void;
  fetchTasks: (id: number) => void;
}

export default function PermanentDrawerRight ({ 
  projects, 
  openCreateProjectModal, 
  openDeleteProjectModal,
  setProjectId,
  fetchTasks }: Props) {

    const handleOpenModal = (id: number) => {
      setProjectId(id);
      openDeleteProjectModal(id);
    }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        <ListItem key={1} disablePadding>
              <ListItemButton sx={{ justifyContent: 'space-between', width: '100%' }}>
                <ListItemText primary="My projects" />
              </ListItemButton>
              <ListItemButton sx={{ height: '100%'}} onClick={openCreateProjectModal}>
                <ListItemIcon>
                  <AddIcon/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
            {
              projects.length === 0 ? (
                <ListItemText secondary="There is no projects" />
              ) : null
            }
            </ListItem>
          {projects.map((project, index) => (
            <ListItem key={index} disablePadding sx={{ display:'flex', justifyContent:'right'}}>
              <ListItemButton onClick={() => fetchTasks(project.id)}>
                <ListItemText secondary={project.name} />
              </ListItemButton>
                <ListItemIcon>
                  <EditIcon/>
                </ListItemIcon>
                <ListItemIcon 
                  onClick={() => handleOpenModal(project.id)} 
                >
                  <DeleteIcon/>
                </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}