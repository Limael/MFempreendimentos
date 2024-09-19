import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { HouseProject } from "../../../../types/HouseProjects";
import CustomLeftArrow from "../CustomLeftArrow";
import CustomRightArrow from "../CustomRightArrow ";
import locationIcon from "../../../../assets/images/locationIcon.svg";
import bedIcon from "../../../../assets/images/bedIcon.svg";
import bathIcon from "../../../../assets/images/bathIcon.svg";
/* import coinIcon from "../../../../assets/images/coinIcon.svg";
 */ interface HouseModalProps {
  open: boolean;
  project: HouseProject | null;
  handleClose: () => void;
}

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

export default function HouseModal({
  open,
  project,
  handleClose,
}: HouseModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (project && project.images) {
      // Definir a primeira imagem como selecionada ao abrir o modal
      const firstImageKey = Object.keys(project.images)[0];
      setSelectedImage(project.images[firstImageKey].default);
    }
  }, [project]);

  // Função para definir a imagem selecionada no carrossel
  const handleImageSelect = (imageKey: string) => {
    if (project && project.images) {
      setSelectedImage(project.images[imageKey].default);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl" sx={{ p: 0 }}>
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          backgroundColor: "#111",
          color: "white",
        }}
      >
        {project && (
          <Grid
            container
            sx={{ padding: "0px" }}
            display={"flex"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ position: "relative", height: "80%!important" }}
            >
              <Box
                sx={{
                  background: "rgba(37, 38, 38, 0.60)",
                  backdropFilter: "blur(20px)",
                  overflowY: "auto",
                  mr: {
                    xs: 0,
                    md: -8,
                  },
                  ml: {
                    xs: 0,
                    md: 8,
                  },
                  position: "relative",
                  zIndex: 22,
                  height: {
                    xs: "100%!important",
                    md: "80%!important",
                  },

                  padding: 4,
                }}
              >
                <Button
                  sx={{
                    background: "rgba(37, 38, 38, 0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.50)",
                    py: 0,
                    gap: 1,
                    borderRadius: "0px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    mb: 4,
                    ml: { xs: 4, md: 0 },
                    position: "absolute",
                    top: 12,
                    right: 12,
                    display: { xs: "flex", md: "none" },
                  }}
                  onClick={handleClose}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      py: 2,
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ background: "white" }}
                  />
                  <Box
                    sx={{
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 300,
                      textTransform: "none",
                      px: 1,
                    }}
                  >
                    Voltar
                  </Box>
                </Button>
                <Typography
                  variant="h5"
                  sx={{ padding: "20px 0", fontWeight: 600, mb: 2 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" mb={2}>
                  {project.description}
                </Typography>
                <Button
                  sx={{
                    background: "rgba(37, 38, 38, 0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.50)",
                    py: 0,
                    gap: 1,
                    borderRadius: "0px",
                    width: "100%",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    my: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      py: 2,
                    }}
                  >
                    <img src={locationIcon} alt="Location" />
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ background: "white" }}
                  />
                  <Box
                    sx={{
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 300,
                      textTransform: "none",
                      px: 1,
                      width: "100%",
                    }}
                  >
                    {project.location}
                  </Box>
                </Button>
                <Box
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  sx={{ mt: 2 }}
                  width={"100%"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box component={"img"} src={bedIcon} />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginLeft: "0.5rem" }}
                    >
                      {project.numberOfRooms}
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box component={"img"} src={bathIcon} />
                    <Typography
                      variant="subtitle1"
                      sx={{ marginLeft: "0.5rem" }}
                    >
                      {project.numberOfBathrooms}
                    </Typography>
                  </Box>
                  {/*     <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={coinIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {project.value}
                                        </Typography>
                                    </Box> */}
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1">Contato:</Typography>
                  <Typography variant="subtitle1" sx={{ marginLeft: "0.5rem" }}>
                    (45) 99129-1013
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginLeft: "0.5rem" }}>
                    (45) 99932-1981
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: "100%",
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  sx={{
                    background: "rgba(37, 38, 38, 0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.50)",
                    py: 0,
                    gap: 1,
                    borderRadius: "0px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    mb: 4,
                    ml: { xs: 4, md: 0 },
                    position: "absolute",
                    top: 12,
                    right: 12,
                    display: { xs: "none", md: "flex" },
                  }}
                  onClick={handleClose}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      py: 2,
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ background: "white" }}
                  />
                  <Box
                    sx={{
                      color: "white",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 300,
                      textTransform: "none",
                      px: 1,
                    }}
                  >
                    Voltar
                  </Box>
                </Button>
                <Box
                  component={"img"}
                  src={selectedImage || ""}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: { xs: "300px", md: "500px" },
                    objectFit: "cover",
                    objectPosition: "center",
                    mt: { xs: 8, md: 0 },
                  }}
                />

                <Carousel
                  responsive={responsive}
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                  ssr={true}
                  infinite={true}
                  autoPlay={false}
                  containerClass="carousel-container-houses"
                  itemClass="carousel-item"
                >
                  {Object.keys(project.images).map((imageKey) => (
                    <Box
                      key={imageKey}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        cursor: "pointer",
                        mx: 4,
                        mt: { xs: 2, md: 0 },
                      }}
                      onClick={() => handleImageSelect(imageKey)}
                    >
                      <Box
                        component={"img"}
                        src={project.images[imageKey].default}
                        alt={project.title}
                        draggable={false}
                        sx={{
                          width: "96px",
                          height: "96px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          objectPosition: "center",
                          border:
                            selectedImage === project.images[imageKey].default
                              ? "2px solid white"
                              : "2px solid transparent",
                        }}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
}
