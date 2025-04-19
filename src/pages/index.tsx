import '@mantine/carousel/styles.css';
import React from "react";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { CommentsCarousel } from '../components/CommentsCarousel';
import { Welcome } from "../components/Welcome/Welcome";

export default function HomePage({ serverData }: { serverData: { commentsData: { comment: string }[] } }) {

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      {serverData?.commentsData && <CommentsCarousel commentsData={serverData.commentsData} />}
    </>
  );
}

export async function getServerData() {
  return {
    props: {
      commentsData: [{ comment: `a` }, { comment: `b` }]
    }
  }
}
