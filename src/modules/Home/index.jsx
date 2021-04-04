import { Box, Grid } from "@material-ui/core";
import Layout from "../../containers/templates/Layout";
import CardMateri from "../Materi/CardMateri/index";

const HomePage = () => {
  return (
    <Layout>
      <Grid container spacing={6}>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Matematika Kelas XII" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Matematika Kelas XI" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Matematika Kelas X" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Bahasa Indonesia XII" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Bahasa Indonesia XI" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Bahasa Indonesia X" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>{" "}
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Pendidikan Penjas XII" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Pendidikan Penjas XI" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Bahasa Indonesia XI" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Bahasa Indonesia X" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Pendidikan Penjas XII" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
        <Box mt={6} mr={2}>
          <Grid item xs={6} sm={3}>
            <CardMateri materiPelajaran="Pendidikan Penjas XI" titleMateri="Materi" buttonSubmit="Gabung"/>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
};

export default HomePage;
