import LoginPage from "../../modules/auth/Sign in/Login";
import RegisterPage from "../../modules/auth/Sign up/Register";
import HomePage from "../../modules/Home";
import DaftarKuis from "../../modules/Siswa/DaftarKuis";
import DetailPelajaranSiswa from "../../modules/Siswa/DetailPelajaranSiswa";
import HalamanKuis from "../../modules/Siswa/HalamanKuis";
import SiswaPage from "../../modules/Siswa/HalamanSiswa";
import MataPelajaran from "../../modules/Siswa/PelajaranSiswa";

const routes = [
    {
        path: "/",
        label:"Home Page",
        component:HomePage
    },
    {
        path: "/login",
        label:"Login Page",
        component:LoginPage
    },
    {
        path: "/register",
        label:"Register Page",
        component:RegisterPage
    },
    {
        path: "/siswa",
        label:"Siswa Page",
        component:SiswaPage
    },
    {
        path: "/matapelajaran",
        label:"Mata Pelajaran Page",
        component:MataPelajaran
    },
    {
        path: "/detailmatapelajaran",
        label:"Detail Pelajaran Page",
        component:DetailPelajaranSiswa
    },
    {
        path: "/daftarkuis",
        label:"Daftar Kuis",
        component:DaftarKuis
    },
    {
        path: "/halamankuis",
        label:"Halaman Kuis",
        component:HalamanKuis
    }
    
]


export default routes;