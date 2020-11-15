import { GetStaticPaths, GetStaticProps } from "next";
import { getAdvisorsAt, getCompositionAt, getFormerMembersAt, getTimePoints } from "../../data/board";
import Board from "./index";
export default Board;


export const getStaticPaths: GetStaticPaths = async () => {
    const points = await getTimePoints();
    const paths = points.slice(1).map(instance => ({ params: { instance } }));

    return {
      paths,
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps = async (context) => {
    // get all time points, the one that is up-to-date, and the one requested
    const points = await getTimePoints();
    const up_to_date_instance = points[0];
    const point = context.params!.instance as string;
    
    // extract the next and previous instance
    const [next_instance, instance, prev_instance_u] = points.slice(points.indexOf(point) - 1);
    const prev_instance = (typeof prev_instance_u === 'string') ? prev_instance_u : null;
    
    // find the composition of the board
    const board = await getCompositionAt(point);
    const advisors = await getAdvisorsAt(point);
    const formers = await getFormerMembersAt(instance);

    return {
        props: { board, advisors, formers, up_to_date_instance, next_instance, instance, prev_instance},
    }
}