import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
  tasks: any[]
}

export default function BasicTable({ tasks }: Props) {

  console.log('====================================');
  console.log(tasks);
  console.log('====================================');
  return (
    <div className="flex-1">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><span className='font-semibold text-gray-800'>Name</span></TableCell>
              <TableCell align="left"><span className='font-semibold text-gray-800'>Assigned to</span></TableCell>
              <TableCell align="left"><span className='font-semibold text-gray-800'>State</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks?.map((task) => (
              <TableRow
                key={task.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{task.name}</TableCell>
                <TableCell align="left">{task.assignedTo}</TableCell>
                <TableCell align="left"><span className={`${task.state === "completed" ? "bg-green-500" : "bg-gray-300"} font-semibold px-2 py-2 rounded-md`}>{task.state}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}