@extends('layouts.app')
@section('title','Usuários')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="row">
                <div class="card">
                    <div class="card-header row justify-content-between">
                        <h5 class="card-title col-auto">Lista usuarios</h5>
                        <a href="{{ route('user.create') }}" class="col-auto btn btn-purple">
                        <i class="align-middle" data-feather="user"></i>&nbsp; <span class="align-middle">Novo usuário</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success alert-dismissible show fade" role="alert" style="border-left: 5px solid darkgreen;">
                                <div class="alert-body">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    <strong>{{ session('success') }}</strong>
                                </div>
                            </div>
                        @endif
                        <table id="users_table" class="table table-responsive display table-hover my-0 w-100">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th> Previlêgio </th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $user)
                            <tr>
                                <td>{{$user->id}}</td>
                                <td>{{$user->email}}</td>
                                <td>{{$user->roles()->first()->name}}</td>
                                <td><a class="btn btn-warning" href="{{route('user.edit',$user->id)}}">Editar</a></td>
                                <td><button class="btn btn-danger" onclick="document.getElementById('user_{{$user->id}}_delete').submit()">Delete</button>
                                    <form action="{{route('user.destroy',$user->id)}}" method="post" id="user_{{$user->id}}_delete">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                            <tfoot>

                                    <tr>
                                        <th>Id</th>
                                        <th>Email</th>
                                        <th> Previlêgio </th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>

                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js')
    <script>

    </script>
@endpush
