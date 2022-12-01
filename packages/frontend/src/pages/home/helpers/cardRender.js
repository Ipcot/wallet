import { nanoid } from 'nanoid';
import { CardConteiner, CardBox, TypographyCard, Span } from '../index.styled';
import { format, parseISO } from 'date-fns';

export const СardRender = ({ data }) => {
  const card =
    data &&
    data.map(({ isIncome, category, comment, sum, balance, date }) => {
      return (
        <CardConteiner sx={{ minWidth: 280 }} typeTr={isIncome ? '+' : '-'}>
          <CardBox key={nanoid()}>
            <TypographyCard>
              Date <Span> {format(parseISO(date), 'dd.MM.yyyy')}</Span>
            </TypographyCard>
            <TypographyCard>
              Type <Span>{isIncome ? '+' : '-'}</Span>
            </TypographyCard>
            <TypographyCard>
              Category <Span>{category}</Span>
            </TypographyCard>
            <TypographyCard>
              Comment <Span>{comment}</Span>
            </TypographyCard>
            <TypographyCard>
              Sum <Span typeTr={isIncome ? '+' : '-'}>{sum}</Span>
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
