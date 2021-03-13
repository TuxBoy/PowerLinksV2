<?php

namespace App\Command;

use App\Infrastructure\Service\Dump\DumpInterface;
use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

final class DbDumpCommand extends Command
{
	private const DEFAULT_DUMP_FILE = 'dump.sql';

    protected static $defaultName = 'db:dump';

    protected static $defaultDescription = 'Dump database from production database';

	private DumpInterface $mysqlDumpService;

	public function __construct(DumpInterface $mysqlDumpService)
    {
	    parent::__construct(self::$defaultName);
	    $this->mysqlDumpService = $mysqlDumpService;
    }

	protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('file', InputArgument::OPTIONAL, 'File name of dump')
            ->addOption('test', 't', InputOption::VALUE_NONE, 'Add test option for simulate dump')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $fileArgument = $input->getArgument('file') ?? self::DEFAULT_DUMP_FILE;
        $testOption = $input->getOption('test');

        try {
	        if (!$testOption) {
		        $this->mysqlDumpService->dump($fileArgument);
	        }
        } catch (Exception $exception) {
            $io->error($exception->getMessage());

            return 1;
        }

        $message = $testOption ? 'Test dump database successfully' : 'Dump database successfully';
        $io->success($message);

        return 0;
    }
}
