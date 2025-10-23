import Country from "../models/Country";
import Location from "../models/Location";

export const COUNTRIES = [
  new Country("c1", "United States", "#f44336"), // Red
  new Country("c2", "Italy", "#2196f3"), // Blue
  new Country("c3", "Japan", "#4caf50"), // Green
  new Country("c4", "Australia", "#ff9800"), // Orange
  new Country("c5", "Brazil", "#9c27b0"), // Purple
  new Country("c6", "Greece", "#ffeb3b"), // Yellow
  new Country("c7", "France", "#03a9f4"), // Light Blue
  new Country("c8", "Mexico", "#8bc34a"), // Light Green
  new Country("c9", "Thailand", "#ff5722"), // Deep Orange
  new Country("c10", "South Africa", "#673ab7"), // Deep Purple
];

export const LOCATIONS = [
  new Location(
    "l1",
    "c1",
    "Maui, Hawaii",
    300,
    1985,
    4.8,
    "https://www.nps.gov/grca/planyourvisit/images/grand-canyon-south-rim.jpg",
    "Marvel at breathtaking views, hike scenic trails, and enjoy the vast beauty of the Grand Canyon."
  ),
  new Location(
    "l2",
    "c2",
    "Amalfi Coast",
    250,
    1990,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipNymQy1kDaXbVnYbM2DYeG7tTuRlzOaZLbCZ1Rk=s1360-w1360-h1020",
    "Marvel at breathtaking views, hike scenic trails, and enjoy the vast beauty of the Grand Canyon."
  ),
  new Location(
    "l3",
    "c3",
    "Kyoto",
    200,
    1978,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipN4BCdka5-ZGpE6lhQoGvQyuyvrDYDYRTR9mDZ9=s1360-w1360-h1020",
    "FSsfef"
  ),
  new Location(
    "l4",
    "c4",
    "Sydney",
    400,
    2001,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipOBnp2waOt2jqzmSeGuNr6yw6nDAdfbB_JgTS67=s1360-w1360-h1020",
    "FFDDASADVds"
  ),
  new Location(
    "l5",
    "c5",
    "Rio de Janeiro",
    220,
    1988,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMKwVkZ66ndyrSL8HNshOPfuFIh6PC8-2OhUJaa=s1360-w1360-h1020",
    "fawefdfdFew"
  ),
  new Location(
    "l6",
    "c6",
    "Santorini",
    280,
    1995,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipMLVH4hUp3VXYReamqUsz1Ljonh76eIal4I4yZZ=s1360-w1360-h1020",
    "afdFVdsfvdvsdV"
  ),
  new Location(
    "l7",
    "c7",
    "Paris",
    350,
    1975,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipPl_SZNGGy5UrPSTdFEklkVUMi8YF5d3WtBKgsu=s1360-w1360-h1020",
    "AFADVDASVDAVDVSDVds"
  ),
  new Location(
    "l8",
    "c8",
    "Cancún",
    180,
    2003,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNiyUDf100wuxMTsu3OEvAbJ188WBsoVp3FBrs=s1360-w1360-h1020",
    "fsFDCsvdsVDVs"
  ),
  new Location(
    "l9",
    "c9",
    "Phuket",
    150,
    1982,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipOCc6Y1AUqBnXfuL3LVNNso5wCKCjsSQatGwKeq=s1360-w1360-h1020",
    "AFdfdDSDCc"
  ),
  new Location(
    "l10",
    "c10",
    "Cape Town",
    260,
    1998,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOOqLSYYgNwxkCHrEgC6AD76Oppmkup2dUtYC_L=s1360-w1360-h1020",
    "safdasfasvasdvasdvcadsvsdvsd"
  ),
  new Location(
    "l11",
    "c1",
    "New York City",
    500,
    1979,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipPaKHoIPvRZtgQFXX-v0JS3elhZOQAEcR4EtB3L=s1360-w1360-h1020",
    "dawfdscdscdscdcCdc"
  ),
  new Location(
    "l12",
    "c2",
    "Venice",
    230,
    1987,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipOyfO-CtM3qY-_U2Lh_vXeJT-JDWF1Peo60-Jx6=s1360-w1360-h1020",
    "sDFdcdscdsvdsVdsdvds",
  ),
  new Location(
    "l13",
    "c3",
    "Tokyo",
    280,
    1993,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipOVLpVlPFaMs5PqZkTV1Xp4sag6DeD4a1sETsrg=s1360-w1360-h1020",
    "ADSFVDSsddvddsvds"
  ),
  new Location(
    "l14",
    "c4",
    "Melbourne",
    270,
    1981,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipN5RttKwNWNLak8YyI-YK3iJkljMbr6dFAQF3Bk=s1360-w1360-h1020",
    "afdfdDFDSFDV"
  ),
  new Location(
    "l15",
    "c5",
    "São Paulo",
    240,
    1996,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020",
    "AFdffdsfdsFdsfdsF"
  ),
  new Location(
    "l16",
    "c6",
    "Athens",
    290,
    2005,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020",
    "AFEADFCDCFdfdF"
  ),
  new Location(
    "l17",
    "c7",
    "Nice",
    210,
    1989,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipPBKwR-aaXqBBJV7jZhu68yyAgi2a2K-teX3K4K=s1360-w1360-h1020",
    "SDFSADFDvDFVfvd"
  ),
  new Location(
    "l18",
    "c8",
    "Tulum",
    170,
    1999,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020",
    "AFAGGRARGEGSEGG"
  ),
  new Location(
    "l19",
    "c9",
    "Bangkok",
    190,
    1977,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipN1UpPQNu6nZ7wgTW9WSfWmoGyKSLffNCJ8PhDg=s1360-w1360-h1020",
    "SFDFfedfFDFD"
  ),
  new Location(
    "l20",
    "c10",
    "Johannesburg",
    260,
    1990,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipMMC9ncqLd5gz6rK6uLVv-AM52frv20rwOi-5eM=s1360-w1360-h1020",
    "SFSADDFdfdFDFDFV"
  ),
];
