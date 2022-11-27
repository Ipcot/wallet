import { nanoid } from 'nanoid';
import { CardConteiner, CardBox, TypographyCard, Span } from '../index.styled';

export const cardRender = datas => {
  const card =
    datas &&
    datas.map(data => {
      return (
        <CardConteiner sx={{ minWidth: 280 }} typeTr={data.type}>
          <CardBox key={nanoid()}>
            <TypographyCard>
              Date <Span>{data.date}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{data.type}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{data.category}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{data.comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span typeTr={data.type}>{data.sum}</Span>
            </TypographyCard>
            <TypographyCard>
              Balance <Span>{data.balance}</Span>
            </TypographyCard>
          </CardBox>
        </CardConteiner>
      );
    });
  return card;
};
