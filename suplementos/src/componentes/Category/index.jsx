import { CategoryContainer } from "./style"

export function Category({ category }) {
	const { title, imageUrl } = category

	return
	( <CategoryContainer>
		<div className='imagem-background' />
		<div className="category-body-container" />
		<h2>{title}</h2>
		<p>Comprar agora</p>

			</CategoryContainer>
			)
}
