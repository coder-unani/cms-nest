import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lotto645WinningHistory } from './lotto645-winning-history.entity';

@Entity({ name: 'LOTTO645_WINNING_AMOUNTS' })
export class Lotto645WinningAmount {
  @PrimaryColumn({ name: 'ROUND', type: 'int' })
  round!: number;

  @PrimaryColumn({ name: 'RANK', type: 'int' })
  rank!: number;

  @Column({ name: 'TOTAL_WINNING_AMOUNT', type: 'bigint' })
  totalWinningAmount!: string;

  @Column({ name: 'NUMBER_OF_WINNING', type: 'int' })
  numberOfWinning!: number;

  @Column({ name: 'WINNING_AMOUNT', type: 'bigint' })
  winningAmount!: string;

  @Column({ name: 'ETC', type: 'text', nullable: true })
  etc?: string;

  @ManyToOne(() => Lotto645WinningHistory)
  @JoinColumn({ name: 'ROUND', referencedColumnName: 'round' })
  winningHistory!: Lotto645WinningHistory;
}
