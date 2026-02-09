import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'LOTTO645_WINNING_HISTORY' })
export class Lotto645WinningHistory {
  @PrimaryColumn({ name: 'ROUND', type: 'smallint' })
  round!: number;

  @Column({ name: 'DRAW_DATE', type: 'datetime' })
  drawDate!: Date;

  @Column({ name: 'WINNING_NUMBER1', type: 'tinyint' })
  winningNumber1!: number;

  @Column({ name: 'WINNING_NUMBER2', type: 'tinyint' })
  winningNumber2!: number;

  @Column({ name: 'WINNING_NUMBER3', type: 'tinyint' })
  winningNumber3!: number;

  @Column({ name: 'WINNING_NUMBER4', type: 'tinyint' })
  winningNumber4!: number;

  @Column({ name: 'WINNING_NUMBER5', type: 'tinyint' })
  winningNumber5!: number;

  @Column({ name: 'WINNING_NUMBER6', type: 'tinyint' })
  winningNumber6!: number;

  @Column({ name: 'BONUS_NUMBER', type: 'tinyint' })
  bonusNumber!: number;

  @Column({ name: 'TOTAL_SALES_AMOUNT', type: 'bigint' })
  totalSalesAmount!: string;
}
