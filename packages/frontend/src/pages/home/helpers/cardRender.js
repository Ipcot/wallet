import { nanoid } from 'nanoid';
import { CardConteiner, CardBox, TypographyCard, Span } from '../index.styled';

export const СardRender = data => {
  const card =
    data &&
    data.map(({ type, category, comment, sum, balance }) => {
      return (
        <CardConteiner sx={{ minWidth: 280 }} typeTr={type}>
          <CardBox key={nanoid()}>
            <TypographyCard>
              Date <Span>{date}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{type}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{category}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span typeTr={type}>{sum}</Span>
            </TypographyCard>
            <TypographyCard>
              Balance <Span>{balance}</Span>
            </TypographyCard>
          </CardBox>
        </CardConteiner>
      );
    });
  return card;
};
