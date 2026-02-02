import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'LOTTO645_WINNER_HISTORY' })
export class Lotto645WinnerHistory {
  @PrimaryColumn({ name: 'ROUND', type: 'int' })
  round!: number;

  @Column({ name: 'DRAW_DATE', type: 'datetime' })
  drawDate!: Date;

  @Column({ name: 'WINNING_NUMBER1', type: 'int' })
  winningNumber1!: number;

  @Column({ name: 'WINNING_NUMBER2', type: 'int' })
  winningNumber2!: number;

  @Column({ name: 'WINNING_NUMBER3', type: 'int' })
  winningNumber3!: number;

  @Column({ name: 'WINNING_NUMBER4', type: 'int' })
  winningNumber4!: number;

  @Column({ name: 'WINNING_NUMBER5', type: 'int' })
  winningNumber5!: number;

  @Column({ name: 'WINNING_NUMBER6', type: 'int' })
  winningNumber6!: number;

  @Column({ name: 'BONUS_NUMBER', type: 'int' })
  bonusNumber!: number;

  @Column({ name: 'TOTAL_SALES_AMOUNT', type: 'bigint' })
  totalSalesAmount!: string;
}
