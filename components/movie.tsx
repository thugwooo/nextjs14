import Link from "next/link";
import styles from "../styles/Movie.module.css";
interface IMovieProps {
	title: string;
	id: string;
	poster_path: string;
}
export default function Movie({ title, id, poster_path }: IMovieProps) {
	return (
		<Link href={`/movies/${id}`}>
			<div className={styles.movie}>
				<img src={poster_path} alt={title} />
				{title}
			</div>
		</Link>
	);
}
