@servers(['web' => ['root@199.247.22.75']])

@task('deploy', ['on' => 'web'])
    cd /var/www/resume/
    git pull origin master
@endtask
