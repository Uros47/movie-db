import { Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@mui/material/";

export default function MoviesTable({ movies }) {
  return (
    <TableContainer component={Paper}>
      {movies ? (
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ maxWidth: "100px" }}>Title</TableCell>
              <TableCell align='right'>Year</TableCell>
              <TableCell align='right'>Type </TableCell>
              <TableCell align='right'>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ maxWidth: "100px" }} component='th' scope='row'>
                  {movie.Title}
                </TableCell>
                <TableCell align='right'>{movie.Year}</TableCell>
                <TableCell align='right'>{movie.Type}</TableCell>
                <TableCell align='right'>
                  <img src={movie.Poster} alt='moviePoster' width='200px' />
                  {movie.Image}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </TableContainer>
  );
}
